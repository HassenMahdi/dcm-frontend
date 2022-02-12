export function GetPathFromDefinition(key, keytype, definitions, base = [], listindex = 0)
{
    let paths = []
    // list type
    const path = base.concat([key])

    if(Array.isArray(keytype))
    {
      const keyIndex = "["+ listindex +"]"

      paths = paths.concat(GetPathFromDefinition(keyIndex, keytype[0], definitions, base=path))
    } 
    //definition type
    else if (definitions[keytype])
    {
      const typedef =  definitions[keytype];
      Object.keys(typedef).forEach(childkey=>
      {
          paths = paths.concat(GetPathFromDefinition(childkey,typedef[childkey],definitions, base=path))    
      })
    }
    // primitive types
    else
    {
      paths.push(path)
    }

    return paths
}


export function getMappingTree(targets, definitions, base = [])
{
  const mappingTree = []
  Object.keys(targets).forEach(key=>{
        
    const node:any = {key: key, path: base}
    
    const type = targets[key]
    if(Array.isArray(type))
    {
      node.isList = true;
      node.type = type;
      node.children = [];
    } 
    else
    {
      node.type = type

      if(definitions[node.type])
      {
        node.isObj = true
        node.children = getMappingTree(definitions[node.type], definitions, base = base.concat(node.key))
      } else 
      {
        node.isLeaf = true;
        node.bind = base.concat([node.key]).join(".")
      }
    }

    mappingTree.push(node)
  })

  return mappingTree;
}

export function addMappingListElement(node, definitions)
{
  const targets = definitions[node.type]
  console.log(node)

  if(targets)
  {
    let elementKey = "["+ node.children.length +"]"
    let element:any = 
    {
      key: elementKey,  
      type:node.type[0],
      isObj: true, 
      path: node.path.concat([node.key]),
    }
    element.children = getMappingTree(targets, definitions, element.path.concat(element.key));
    node.children.push(element)
    console.log(element);
  } else
  {
    let elementKey = "["+ node.children.length +"]"
    const element = {
      key: elementKey,  
      type:node.type[0],
      isLeaf:true,
      path: node.path.concat([node.key]),
      bind: node.path.concat([node.key, elementKey]).join(".")
    }
    node.children.push(element)
  }
}

export function getMappingBindings(result:string[], tree)
{
  for (let node of tree)
  {
    if(node.isLeaf)
    {
      result.push(node.bind)
    } 
    else
    {
      getMappingBindings(result, node.children)
    }
  }
}

export function updateMappingTree(tree , model)
{
  Object.keys(model).forEach(bind=>{
    const path =  bind.split(".")

    let currentTree = tree;

    for (let key of path)
    {
      const node = currentTree.find(n=>n.key == key)
      console.log({key, node})

      if(!node)
        break;

      currentTree = node.children      
    }
  })
}
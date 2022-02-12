import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MappingTemplateService } from '@app/datacapture/pages/upload/services/mapping/mapping-template.service';
import { withValue } from '@app/shared/utils/rxjs.utils';
import { NzThMeasureDirective } from 'ng-zorro-antd';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-template-definition',
  templateUrl: './template-definition.component.html',
  styleUrls: ['./template-definition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDefinitionComponent{

  template_id
  template
  model = {}
  template$ = new BehaviorSubject<any>(null)
  expandedProps = {}


  @Input() enableExtentions = false
  @Input() highlight = false

  @Input("template") set _template(t)
  {
    this.template_id = t; 

    withValue(this.templates.getTemplateDef(this.template_id, true), (template)=>{
      this.template = template
      this.template$.next(template)
    })
  }

  @Input("mapping") set _mapping(m)
  {
    this.model = m;
  }
  @Output() mappingChange = new EventEmitter();


  constructor(public templates:MappingTemplateService) { }

  findDefinition($ref)
  {

    if(!$ref || !$ref.split)
      return [];

    const path = $ref.split("/")

    let target = this.template

    for (let i = 1; i < path.length; i++)
    {
      const p = path[i];
      target = target[p];
    }
    
    return (target)? target.allOf:[];
  }

  doesPathHaveMapping(path)
  {
    return Object.keys(this.model).filter(key=>key.startsWith(path)).length;
  }

  onMappingChanged(event ,path)
  {
    const value = event.target.value
    this.setMapItem(path, value)
  }

  setMapItem(path, value)
  {
    if(value)
    {
      this.model[path] = value;
    } 
    else
    {
      if(this.model[path])
        delete this.model[path];
    }

    this.mappingChange.emit(this.model)
  }

  onDrop(event:any, path:string)
  {
    this.setMapItem(path, event.data)
  }
}

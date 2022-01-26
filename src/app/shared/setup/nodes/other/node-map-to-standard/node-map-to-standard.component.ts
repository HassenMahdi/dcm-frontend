import { Component } from '@angular/core';
import { PipelineNodeComponent } from '@app/datacapture/pages/automatic-upload/pipeline/componenets/pipeline-editor/pipeline-node/pipeline-node.component';
import { withValue } from '@app/shared/utils/rxjs.utils';
import { BehaviorSubject } from 'rxjs';

const MAPPING_STANDARDS = [
  {
    name:'FHIR - Patient',
    template_id: "FHIR_PATIENT",
    targets: [
      {label:'First Name', target: 'TF1' ,type: 'string',  cardinality: "1..*", decription:'Some Description', category:'Metadata', parent: "meta", mandatory: false},
      {label:'Family Name', target: 'TF1' ,type: 'string',  cardinality: "1", decription:'Some Description', category:'Metadata', parent: "meta", mandatory: false},
      {label:'Birth Date', target: 'TF2' ,type: 'date',  cardinality: "1", decription:'Some Description', category:'Structure Data', parent: "meta", mandatory: false},
      {label:'Coding', target: 'coding' ,type: 'list',  cardinality: "0..*", decription:'Some Description', category:'Structure Data', parent: null, mandatory: false},
      {label:'Text DIV', target: 'div' ,type: 'date',  cardinality: "1", decription:'Some Description', category:'Narrative', parent: "text", mandatory: false},
    ]
  },
  {
    name:'FHIR - Observation',
    template_id: "FHIR_OBSERVATION",
    targets: [
      {label:'First Name', target: 'TF1' ,type: 'string',  cardinality: "1..*", decription:'Some Description', category:'Metadata', parent: "meta", mandatory: false},
      {label:'Text DIV', target: 'div' ,type: 'date',  cardinality: "1", decription:'Some Description', category:'Narrative', parent: "text", mandatory: false},
    ]
  }
]

@Component({
  selector: 'app-node-map-to-standard',
  templateUrl: './node-map-to-standard.component.html',
  styleUrls: ['./node-map-to-standard.component.css']
})
export class NodeMapToStandardComponent extends PipelineNodeComponent {
  
  templates$ = new BehaviorSubject(MAPPING_STANDARDS);
  
  searchTarget = ""
  
  Standard;
  mappingFields$ = new BehaviorSubject<any[]>([]);

  mapping = {};

  constructor() 
  {
    super();
  
    this.onStandardSelected()
  }

  onStandardSelected() 
  {
    withValue(this.templates$, (templates)=>{
      console.log(templates)
        this.Standard = templates.find(t=>t.template_id == this.data.template_id)
        console.log(this.Standard)
        if(this.Standard)
        {
          this.mappingFields$.next(this.Standard.targets);
        }
    });
  }

  onTemplateSelected(template_id)
  {
    this.data.template_id = template_id;
    this.DiscardMapping();

    this.onStandardSelected();
  }

  onMapChanged(source, target)
  {
    this.mapping[target.target]=source;
  }

  DiscardMapping()
  {
    this.mapping = {};
  }

  save() {
    this.onSave.emit(this.data);
  }
}


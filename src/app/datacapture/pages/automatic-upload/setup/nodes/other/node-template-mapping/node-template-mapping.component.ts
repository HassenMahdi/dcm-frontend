import { Component, OnInit } from '@angular/core';
import { PipelineNodeComponent } from '@app/datacapture/pages/automatic-upload/pipeline/componenets/pipeline-editor/pipeline-node/pipeline-node.component';
import { NodeMapToStandard } from '@app/datacapture/pages/automatic-upload/pipeline/models/nodes/other.model';
import { PiplineUtilityService } from '@app/datacapture/pages/automatic-upload/pipeline/services/pipline-utility.service';
import { MappingTemplateService } from '@app/datacapture/pages/upload/services/mapping/mapping-template.service';

@Component({
  selector: 'app-node-template-mapping',
  templateUrl: './node-template-mapping.component.html',
  styleUrls: ['./node-template-mapping.component.css']
})
export class NodeTemplateMappingComponent  extends PipelineNodeComponent {
  
  static width = "70vw" 

  nodeClass = NodeMapToStandard;

  templates$
  sourceHeaders$
  template_id = null;
  mapping = {}

  enableExtentions = false;
  highlightDropZone = false

  showSummary = false;

  constructor(private templates:MappingTemplateService, private utility: PiplineUtilityService) 
  {
    super();
  }

  ngOnInit(): void 
  {
   
    this.template_id = this.data.template_id;

    this.mapping = {}

    if(this.data.mapping)
    {
      this.data.mapping.forEach(m => {
        this.mapping[m['target']] = m['source']
      });
    }

    this.sourceHeaders$ = this.utility.getNodeInputHeaders(this.data.key)
    this.templates$ = this.templates.getTemplates();
  }

  reset()
  {
    this.mapping = {}
  }

  onTemplateChanged(template_id)
  {
    this.template_id = template_id;
  }

  save()
  {
    this.data.template_id = this.template_id;

    this.data.mapping = []
    Object.keys(this.mapping).forEach(target=>{
      const source = this.mapping[target]

      this.data.mapping.push({target, source})
    })

    this.onSave.emit(this.data)
  }
}

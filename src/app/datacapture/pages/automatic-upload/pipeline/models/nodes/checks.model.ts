import { CONNECTOR_DEF_BLOB_STORAGE, CONNECTOR_DEF_MONGODB, CONNECTOR_DEF_POSTGRES, CONNECTOR_DEF_SQL } from "@app/datacapture/pages/connectors/models/connectors.model";
import * as go from "gojs";
import { BaseCheckNodeComponent } from "../../../setup/nodes/checks/base-check-node/base-check-node.component";
import { BaseNodeTransformationComponent } from "../../../setup/nodes/transformations/base-node-transformation/base-node-transformation.component";
import { PipelineNode } from "../node.model";
const $ = go.GraphObject.make;

export class NodeCheck extends PipelineNode{
    static type = 'CHECK'
    static category = 'CHECK'
    static shape = 'RoundedRectangle'
    static color = 'purple'
    static label = 'Generic Check'
    static ports = [{id:"INPUT",spot:go.Spot.LeftCenter}, {id:"OUTPUT",spot:go.Spot.RightCenter}]
    static showLabel = true
    static component = BaseCheckNodeComponent;
}

export class NodeDuplicateCheck extends NodeCheck{
    static type = "duplicate_check"
    static label = "Duplicate Check"
}

export class NodeComparionCheck extends NodeCheck{
    static type = "string_comparison"
    static label = "Format Comparison"
    static nzicon = "check-circle"
}

export class NodeColumnComparison extends NodeCheck{
    static type = "column_comparison"
    static label = "Column Compariosn"
}

export class NodeCodeCheck extends NodeCheck{
    static type = "pycode_check"
    static label = "Pycode"
}

export class NodeTypeCheck extends NodeCheck{
    static type = "type_check"
    static label = "Type Check"
}

export class NodeMatchingScore extends NodeCheck{
    static type = 'matching_score'
    static nzicon = "column-width"
    static label = 'Matching Score'
  }
  

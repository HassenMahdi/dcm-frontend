import { NodeBlobStorageUpload, NodeCollectionUpload, NodeMongoDBUpload, NodePostgresUpload, NodeSQLUpload } from "../nodes/datasink.model";
import { NodeBlobStorage, NodeCollectionImport, NodeManualImport, NodeMongoDBImport, NodePostgresImport, NodeSQLImport } from "../nodes/datasources.model";
import { CollectionUploadComponent } from '../../../setup/nodes/datasinks/collection-upload/collection-upload.component';
import { MongodbUploadNodeComponent } from '../../../setup/nodes/datasinks/mongodb-upload-node/mongodb-upload-node.component';
import { PostgresUploadNodeComponent } from '../../../setup/nodes/datasinks/postgres-upload-node/postgres-upload-node.component';
import { SqlUploadNodeComponent } from '../../../setup/nodes/datasinks/sql-upload-node/sql-upload-node.component';
import { StorageAccountUploadNodeComponent } from '../../../setup/nodes/datasinks/storage-account-upload-node/storage-account-upload-node.component';
import { StorageAccountImportNodeComponent } from '../../../setup/nodes/datasources/azure/storage-account/storage-account.component';
import { CollectionImportComponent } from '../../../setup/nodes/datasources/collection-import/collection-import.component';
import { ManualImportNodeComponent } from '../../../setup/nodes/datasources/manual-import-node/manual-import-node.component';
import { MongodbImportNodeComponent } from '../../../setup/nodes/datasources/mongodb-import-node/mongodb-import-node.component';
import { PostgresImportNodeComponent } from '../../../setup/nodes/datasources/postgres-import-node/postgres-import-node.component';
import { SqlImportNodeComponent } from '../../../setup/nodes/datasources/sql-import-node/sql-import-node.component';
import { NodeJoinComponent } from '../../../setup/nodes/other/node-join/node-join.component';
import { NodePipelineComponent } from '../../../setup/nodes/other/node-pipeline/node-pipeline.component';
import { NodePycodeComponent } from '../../../setup/nodes/other/node-pycode/node-pycode.component';
import { NodeTemplateMappingComponent } from '../../../setup/nodes/other/node-template-mapping/node-template-mapping.component';
import { BaseNodeTransformationComponent } from '../../../setup/nodes/transformations/base-node-transformation/base-node-transformation.component';
import { NodeConcat, NodeJoin, NodePycode, NodeMap, NodeSelect, NodeTransformationPipeline, NodeStandardMap, NodeRequest, NodeMapToStandard } from '../nodes/other.model';
import { NodeTransformationFilter, NodeTransformationFilterAndReplace, NodeTransformationMerge, NodeTransformationReplace, NodeTransformationDeleteRow, NodeTransformationDefaultValue, NodeTransformationSplitter, NodeTransformationCalculator, NodeTransformationFormatDate, NodeTransformationHash, NodeTransformationKeySelect } from '../nodes/transformations.model';
import { NodeDuplicateCheck, NodeComparionCheck, NodeColumnComparison, NodeCodeCheck, NodeTypeCheck, NodeMatchingScore } from '../nodes/checks.model';
import { NodeCheckDuplicateComponent } from "../../../setup/nodes/other/node-check-duplicate/node-check-duplicate.component";
import { NodeRequestComponent } from "../../../setup/nodes/other/node-request/node-request.component";
import { NodeMatchingScoreComponent } from "../../../setup/nodes/transformations/node-matching-score/node-matching-score.component";

export const NODE_OTHERS = [
  NodeConcat.setComponenet(BaseNodeTransformationComponent),
  NodeJoin.setComponenet(NodeJoinComponent),
  NodePycode.setComponenet(NodePycodeComponent),
  NodeMap.setComponenet(NodePycodeComponent),
  NodeSelect.setComponenet(NodePycodeComponent),
  NodeTransformationPipeline.setComponenet(NodePipelineComponent),
  NodeStandardMap.setComponenet(NodePipelineComponent),
  NodeRequest.setComponenet(NodeRequestComponent),
  NodeMapToStandard.setComponenet(NodeTemplateMappingComponent),
]
 
export const DATASOURCE_NODES = [
  NodeCollectionImport.setComponenet(CollectionImportComponent),
  NodeSQLImport.setComponenet(SqlImportNodeComponent),
  NodePostgresImport.setComponenet(PostgresImportNodeComponent),
  NodeBlobStorage.setComponenet(StorageAccountImportNodeComponent),
  NodeMongoDBImport.setComponenet(MongodbImportNodeComponent),
  NodeManualImport.setComponenet(ManualImportNodeComponent),
]
export const DATASINK_NODES = [
  NodeCollectionUpload.setComponenet(CollectionUploadComponent),
  NodeSQLUpload.setComponenet(SqlUploadNodeComponent),
  NodePostgresUpload.setComponenet(PostgresUploadNodeComponent),
  NodeBlobStorageUpload.setComponenet(StorageAccountUploadNodeComponent),
  NodeMongoDBUpload.setComponenet(MongodbUploadNodeComponent),
]
export const NODE_TRANSFORMERS = [
  NodeTransformationFilter
  , NodeTransformationFilterAndReplace
  , NodeTransformationMerge
  , NodeTransformationReplace
  , NodeTransformationDeleteRow
  , NodeTransformationDefaultValue
  , NodeTransformationSplitter
  , NodeTransformationCalculator
  , NodeTransformationFormatDate
  , NodeTransformationHash,
  NodeTransformationKeySelect
].map(cls => {
  cls.setComponenet(cls.component)
  return cls
})


export const CHECK_NODES = [
  NodeDuplicateCheck.setComponenet(NodeCheckDuplicateComponent),
  NodeMatchingScore.setComponenet(NodeMatchingScoreComponent),
  NodeComparionCheck,
  NodeColumnComparison,
  NodeCodeCheck,
  NodeTypeCheck,
]

export const ALL_NODES = [...DATASOURCE_NODES,...DATASINK_NODES, ...NODE_TRANSFORMERS, ...NODE_OTHERS, ...CHECK_NODES]

export function getNodeClassBy(type) {
  return ALL_NODES.find(e => e.type === type)
}

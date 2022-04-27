import { NodeMatchingScoreComponent } from './../../../../../../shared/setup/nodes/transformations/node-matching-score/node-matching-score.component';
import { NodeCheckDuplicateComponent } from './../../../../../../shared/setup/nodes/other/node-check-duplicate/node-check-duplicate.component';
import { NodeRequestComponent } from './../../../../../../shared/setup/nodes/other/node-request/node-request.component';
import { NodeBlobStorageUpload, NodeCollectionUpload, NodeMongoDBUpload, NodePostgresUpload, NodeSQLUpload } from "../nodes/datasink.model";
import { NodeBlobStorage, NodeCollectionImport, NodeManualImport, NodeMongoDBImport, NodePostgresImport, NodeSQLImport } from "../nodes/datasources.model";
import { NodeTransformationCalculator, NodeTransformationDefaultValue, NodeTransformationDeleteRow, NodeTransformationFilter, NodeTransformationFilterAndReplace, NodeTransformationFormatDate, NodeTransformationGroupBy, NodeTransformationHash, NodeTransformationKeySelect, NodeTransformationMerge, NodeTransformationReplace, NodeTransformations, NodeTransformationSplitter } from "../nodes/transformations.model";
import { NodeCheckDuplicate, NodeConcat, NodeJoin, NodeMap, NodeMatchingScore, NodePycode, NodeRequest, NodeSelect, NodeStandardMap, NodeTransformationPipeline } from "../nodes/other.model";
import { StorageAccountImportNodeComponent } from "@app/shared/setup/nodes/datasources/azure/storage-account/storage-account.component";
import { SqlImportNodeComponent } from "@app/shared/setup/nodes/datasources/sql-import-node/sql-import-node.component";
import { NodePycodeComponent } from "@app/shared/setup/nodes/other/node-pycode/node-pycode.component";
import { BaseNodeTransformationComponent } from "@app/shared/setup/nodes/transformations/base-node-transformation/base-node-transformation.component";
import { SqlUploadNodeComponent } from "@app/shared/setup/nodes/datasinks/sql-upload-node/sql-upload-node.component";
import { StorageAccountUploadNodeComponent } from "@app/shared/setup/nodes/datasinks/storage-account-upload-node/storage-account-upload-node.component";
import { PostgresImportNodeComponent } from "@app/shared/setup/nodes/datasources/postgres-import-node/postgres-import-node.component";
import { PostgresUploadNodeComponent } from "@app/shared/setup/nodes/datasinks/postgres-upload-node/postgres-upload-node.component";
import { CollectionUploadComponent } from "@app/shared/setup/nodes/datasinks/collection-upload/collection-upload.component";
import { CollectionImportComponent } from "@app/shared/setup/nodes/datasources/collection-import/collection-import.component";
import { NodeJoinComponent } from "@app/shared/setup/nodes/other/node-join/node-join.component";
import { NodePipelineComponent } from "@app/shared/setup/nodes/other/node-pipeline/node-pipeline.component";
import { ManualImportNodeComponent } from "@app/shared/setup/nodes/datasources/manual-import-node/manual-import-node.component";
import { MongodbUploadNodeComponent } from "@app/shared/setup/nodes/datasinks/mongodb-upload-node/mongodb-upload-node.component";
import { MongodbImportNodeComponent } from "@app/shared/setup/nodes/datasources/mongodb-import-node/mongodb-import-node.component";

export const NODE_OTHERS = [
  NodeConcat.setComponenet(BaseNodeTransformationComponent),
  NodeJoin.setComponenet(NodeJoinComponent),
  NodePycode.setComponenet(NodePycodeComponent),
  NodeMap.setComponenet(NodePycodeComponent),
  NodeSelect.setComponenet(NodePycodeComponent),
  NodeTransformationPipeline.setComponenet(NodePipelineComponent),
  NodeStandardMap.setComponenet(NodePipelineComponent),
  NodeRequest.setComponenet(NodeRequestComponent),
  NodeCheckDuplicate.setComponenet(NodeCheckDuplicateComponent),
  NodeMatchingScore.setComponenet(NodeMatchingScoreComponent)
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


export const ALL_NODES = [...DATASOURCE_NODES, ...DATASINK_NODES, ...NODE_TRANSFORMERS, ...NODE_OTHERS]

export function getNodeClassBy(type) {
  return ALL_NODES.find(e => e.type === type)
}

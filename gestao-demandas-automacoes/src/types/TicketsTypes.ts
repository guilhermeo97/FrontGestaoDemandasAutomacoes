export interface SharePointUser {
    "@odata.type": string;
    Claims: string;
    DisplayName: string;
    Email: string;
    Picture: string;
    Department: string;
    JobTitle: string;
  }
  
export interface SharePointReference {
    "@odata.type": string;
    Id: number;
    Value: string;
  }
  
export interface SharePointItem {
    "@odata.etag": string;
    ItemInternalId: string;
    ID: number;
    Title: string;
    EquipeAtend: string;
    Created: string;
    Author: SharePointUser;
    "Author#Claims": string;
    Status: string;
    TipoDemanda: string;
    Requisitante: string;
    EmailRequisitante: string;
    CargoRequisitante: string;
    GestorRequisitante: string;
    EmailGestorRequisitante: string;
    EmpresasEnvolvidas: SharePointReference[];
    "EmpresasEnvolvidas#Id": number[];
    RequisitoLegal: boolean;
    Criticidade: string;
    ProdutoProblema: string;
    DescricaoProblema: string;
    AreasEnvolvidas: SharePointReference[];
    "AreasEnvolvidas#Id": number[];
    PessoasEnvolvidas: SharePointReference[];
    "PessoasEnvolvidas#Id": number[];
    HorasUtilizadas: SharePointReference[];
    Editor: SharePointUser;
    NomeAvaliador: string;
    EmailAvaliador: string;
    Modified: string;
    "{Link}": string;
    "{Name}": string;
    "{FilenameWithExtension}": string;
    "{Path}": string;
    "{FullPath}": string;
    "{VersionNumber}": string;
    Score: string;
  }
  
export interface SharePointResponse {
    body: {
      value: SharePointItem[];
    };
  }
  
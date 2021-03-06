export interface ILinkedDataSignature extends IDigestable {
  getCreator: () => string
  getNonce: () => string
  getCreationDate: () => Date
  setCreator: (creator: string) => void
  setNonce: (nonce: string) => void
  setSignatureValue: (signatureValue: string) => void
  setCreationDate: (creation: Date) => void
  toJSON: () => ILinkedDataSignatureAttrs
}

export interface IDigestable {
  getSignatureValue: () => Buffer
  digest: () => Promise<Buffer>
}

export interface ILinkedDataSignatureAttrs {
  type: string
  created: string
  creator: string
  nonce: string
  signatureValue: string
}

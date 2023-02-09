//
// wallet.ts
// Copyright (C) 2023 db3.network Author imotai <codego.me@gmail.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

export type WalletType = 'DB3_SECP259K1' | 'DB3_ED25519' | 'MetaMask'

export interface Wallet {
    /**
     * Init the wallet
     **/
    init(walletType: WalletType): boolean

    /**
     * recover wallet from local browser
     **/
    recover(): boolean

    /**
     * Sign the message
     */
    sign(message: Uint8Array): Uint8Array

    /**
     * return the db3 address
     */
    toAddress(): string

    /**
     *
     * return the evm address if the wallettype is DB3_ED25519 or Metamask
     */
    toEVMAddress(): string
}

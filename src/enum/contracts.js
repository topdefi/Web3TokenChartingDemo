import EnumChainId from "./chain.id";

import dexArc from "../img/dex/arcswap.png";

const EnumContracts = {
    [EnumChainId.ARC]: {
        ROUTERS: {
            ARCSWAP: "0x052967739A95D258c44Cf9a79F3135c1291d9fe5",
        },
        ROUTERS_LOGO: {
            ARCSWAP: dexArc,
        },
        FACTORIES: {
            ARCSWAP: "0x265beF08d618051A923502C106aE9002159d9bdF",
        },

    }
};

export default EnumContracts
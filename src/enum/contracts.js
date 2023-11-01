import EnumChainId from "./chain.id";

import dexXzo from "../img/dex/xzoswap.png";

const EnumContracts = {
    [EnumChainId.XZO]: {
        ROUTERS: {
            XZOSWAP: "0x649795E53A9b69CB76A71f1ad1038039F9c65Ab5",
        },
        ROUTERS_LOGO: {
            XZOSWAP: dexXzo,
        },
        FACTORIES: {
            XZOSWAP: "0x2c97D1fd450105cc69E05a4127E425bf4b826264",
        },

    }
};

export default EnumContracts
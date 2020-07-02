#!/bin/sh

set -e

echo "$(echo $RTL_CONFIG_JSON_B64 | base64 -d) \
$(echo $RTL_CONFIG_NODES_JSON_B64 | base64 -d)" | \
jq -s '.[0] + {defaultNodeIndex: .[1][0].index} + {} + {nodes: .[1] | map({index: .index, lnNode: ("LND" + (.index | tostring)), lnImplementation: "LND", Authentication: {macaroonPath: ("/LN/LND" + (.index | tostring)), configPath: ""}, Settings: {userPersona: "OPERATOR", themeMode: "DAY", themeColor: "PURPLE", channelBackupPath: ("/LN/LND" + (.index | tostring) + "/backup"), enableLogging: false, lnServerUrl: .lnServerUrl, swapServerUrl: "", fiatConversion: false}})}' > RTL-Config.json && \
echo "$RTL_CONFIG_NODES_JSON_B64" | base64 -d | \
jq -M -r '.[] | .index, .hexMacaroon' | \
while read -r index; read -r hexMacaroon; do \
mkdir -p "/LN/LND$index/backup" && \
echo $hexMacaroon | xxd -ps -u -r > "/LN/LND$index/admin.macaroon"; done && \
#
# don't uncomment, this might show secret data in logs!!!
# for local debug purposes only!!!
#
# cat RTL-Config.json 2>&1 && \
node rtl

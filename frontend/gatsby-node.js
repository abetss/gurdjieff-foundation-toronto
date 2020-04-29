const crypto = require("crypto");
module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    if (node.internal.type === "StrapiHomePage") {
        const newNode = {
            id: createNodeId(`StrapiHomePageContent-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node.content || " ",
                type: "StrapiHomePageContent",
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node.content || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
};
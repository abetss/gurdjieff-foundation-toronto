const crypto = require("crypto");

const createMdxNode = (contentType, contentProperty, { node, actions, createNodeId }) => {
    if (node.internal.type === contentType) {
        const newContentType = `${contentType}${contentProperty}`;
        const newNode = {
            id: createNodeId(`${newContentType}-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node[contentProperty] || " ",
                type: newContentType,
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node[contentProperty] || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
}

module.exports.onCreateNode = async (onCreateNodeProps) => {
    createMdxNode('StrapiHomePage', 'content', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Footer', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Content', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Summary', onCreateNodeProps);

    // if (node.internal.type === "StrapiHomePage") {
    //     const newNode = {
    //         id: createNodeId(`StrapiHomePageContent-${node.id}`),
    //         parent: node.id,
    //         children: [],
    //         internal: {
    //             content: node.content || " ",
    //             type: "StrapiHomePageContent",
    //             mediaType: "text/markdown",
    //             contentDigest: crypto
    //                 .createHash("md5")
    //                 .update(node.content || " ")
    //                 .digest("hex"),
    //         },
    //     };
    //     actions.createNode(newNode);
    //     actions.createParentChildLink({
    //         parent: node,
    //         child: newNode,
    //     });
    // }

//     if (node.internal.type === "StrapiArticle") {
//         const contentTypes = ['Footer', 'Content'];

//         let nodeTransformedContents = [];

//         node.Contents.forEach(content => {
//             console.log('node', node.Title);

//             contentTypes.forEach(contentType => {
//                 if(!content[contentType]) return;

//                 const newNode = {
//                     id: createNodeId(`StrapiArticle-${contentType}-${node.id}`),
//                     parent: node.id,
//                     children: [],
//                     internal: {
//                         content: content[contentType] || " ",
//                         type: contentType,
//                         mediaType: "text/markdown",
//                         contentDigest: crypto
//                             .createHash("md5")
//                             .update(node.content || " ")
//                             .digest("hex"),
//                     },
//                 };
//                 actions.createNode(newNode);
//                 actions.createParentChildLink({
//                     parent: node,
//                     child: newNode,
//                 });
//                 console.log('newNode', JSON.stringify(newNode.id, null, 2));
//                 nodeTransformedContents.push({
//                     id: newNode.id,
//                     type: contentType
//                 });
//             })

//         })

//         actions.createNodeField({
//             node,
//             name: `mdxContents`,
//             value: nodeTransformedContents
//         })
//     }
};
const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    // using depth first search algorithm
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, item: latestNode };
  };

  const updateNode = (tree, folderId, item, isFolder) => {};
  const deleteNode = (tree, folderId, item, isFolder) => {};

  return { insertNode, updateNode, deleteNode };
};
export default useTraverseTree;

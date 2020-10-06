export const normalize = (data) => {
  return data.map((item, index) =>
     ({
      title: item.title || `Untitled #${index}`,
      author: item.author,
      url: item.url,
      created: item.created_at,//Date.parse(item.created_at),
      id: item.objectID
    })
  );
};

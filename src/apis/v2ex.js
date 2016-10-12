export async function fetchHotTopics() {
  return await fetch('http://localhost:3000/api/topics/hot.json').then(res => res.json());
}

export async function fetchTopicDetail(id) {
  const datas = await fetch(`http://localhost:3000/api/topics/${id}`).then(res => res.json());
  return datas[0];
}

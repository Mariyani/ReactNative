import mockData from '../data/news.json';

export default fetchNewsApi = async () => {
    console.log('sini')
    const response = await fetch('http://gapi.xyz/api/V1/?q=indonesia&max=6');
    console.log(response)
    return response.json();
}
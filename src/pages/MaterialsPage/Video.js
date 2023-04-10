export default function Video({data}) {
    console.log(data);
    return (
        <iframe
            width="95%"
            height="75%"
            title="test"
            src = { `https://www.youtube.com/embed/${data?.videoAdress}`}
            allow="autoplay; encrypted-media" allowFullScreen
        ></iframe>
    );
}

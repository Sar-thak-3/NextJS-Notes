export default function newsArticle({articles}){
    return (
        <>
            <h1>List of News Articles</h1>
            {
                articles.map((article)=>{
                    return (
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.category}</p>
                    </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps(){  // server-side rendering
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return {
        props: {
            articles: data,
        },
    }
}
import Article from "./Article";


function ArticleList (props) {
    const post = props.posts.map((post) => (
        <Article key={post.id} {...post} />
    ))

    return(
        <main>
            {post}
        </main>



    )

}


// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop called post to ArticleList)
// make sure to assign a unique key prop to each Article



export default ArticleList;
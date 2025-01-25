import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams} : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'Alex'},
    _id: 1,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1737222561123-269af6be3e15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    category: "Robots",
    title: "Red Robots",
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Start To Monetize Your<br />Business Ideas</h1>
        <p className="sub-heading !max-w-3xl">Upload and describe your business idea and found potential customers</p>
        <SearchForm query = {query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search for results for "${query}"` : 'All the ideas'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No ideas found</p>
          )}
        </ul>
      </section>
    </>
    );
}

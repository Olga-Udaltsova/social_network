import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { Posts } from "./Posts";
import { Pagination } from "../../components/Pagination";
import { modifyData } from "../../helpers/modifyData";
import { getAllPosts } from "../../helpers/getAllPosts";
import { getFilteredPosts } from "../../helpers/getFilteredPosts";
import { ITEMS_PER_PAGE } from "../../constants";
import * as SC from "./styles";

const Main = () => {
  const { admin, user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);
  const posts = admin
    ? getAllPosts(privatePosts, publicPosts)
    : getFilteredPosts(user, friends, privatePosts, publicPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const { data } = modifyData(posts, currentPage);

  return (
    <Container>
      <Heading $center>Посты</Heading>
      <SC.PostsSection>
        {data.length !== 0 ? (
          data.map((post) => <Posts key={post.id} publication={post} />)
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
      {posts.length > ITEMS_PER_PAGE && (
        <Pagination
          items={posts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Container>
  );
};

export default Main;

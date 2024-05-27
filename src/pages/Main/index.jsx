import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { Posts } from "./Posts";
import { toFilterFriends, toFilterPosts } from "../../helpers/toFilter";
import * as SC from "./styles";

export const Main = () => {
  const { admin, user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);

  const getAllPosts = () => {
    let postsForMain = [];
    if (publicPosts) {
      if (privatePosts) {
        postsForMain = postsForMain.concat(privatePosts);
      }
      return (postsForMain = postsForMain.concat(publicPosts));
    }
    return postsForMain;
  };

  const getFilteredPosts = () => {
    const myFriends = toFilterFriends(user, friends);
    const myPrivatePosts = toFilterPosts(user, privatePosts);
    let postsForMain = publicPosts
      ? publicPosts.concat(myPrivatePosts)
      : myPrivatePosts;

    if (myFriends) {
      myFriends.listOfFriends?.forEach((friend) => {
        const friendsPosts = toFilterPosts(friend, privatePosts);
        return (postsForMain = postsForMain.concat(friendsPosts));
      });
    }
    return postsForMain;
  };

  const posts = admin ? getAllPosts() : getFilteredPosts();

  return (
    <Container>
      <Heading $center>Посты</Heading>
      <SC.PostsSection>
        {posts.length !== 0 ? (
          posts.map((post) => <Posts key={post.id} publication={post} />)
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
    </Container>
  );
};

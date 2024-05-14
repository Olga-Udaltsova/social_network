import { useSelector } from "react-redux";
import { NoContent } from "../../../components/ui/NoContent";
import { Post } from "./Post";
import * as SC from "./styles";

export const Posts = () => {
  const { user } = useSelector((state) => state.currentUser.currentUser);
  const { posts } = useSelector((state) => state.posts.privatePosts);
  const { publicPosts } = useSelector((state) => state.posts);
  const filteredPosts = publicPosts?.filter((item) => {
    if (item.user.email === user.email) {
      return item;
    }
  });
  return (
    <SC.SectionPosts>
      <h3>Общедоступные посты</h3>
      <SC.MyPosts>
        {filteredPosts ? (
          filteredPosts.map((filteredPost) => (
            <Post key={filteredPost.id} myPost={filteredPost} />
          ))
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>

      <h3>Посты только для друзей</h3>
      <SC.MyPosts>
        {posts ? (
          posts.map((post) => <Post key={post.id} myPost={post} />)
        ) : (
          <NoContent>Нет таких постов</NoContent>
        )}
      </SC.MyPosts>
    </SC.SectionPosts>
  );
};

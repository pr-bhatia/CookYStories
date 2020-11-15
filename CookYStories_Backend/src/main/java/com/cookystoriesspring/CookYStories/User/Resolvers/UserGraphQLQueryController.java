package com.cookystoriesspring.CookYStories.User.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class UserGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public UserProfile getUserProfile(String username) {
        return userProfileRepository.findByUsername(username);
    }

    public List<User> getFollowers(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getFollowers();
    }

    public List<User> getFollowing(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getFollowing();
    }

    public List<Post> getPosts(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getPosts();
    }


}

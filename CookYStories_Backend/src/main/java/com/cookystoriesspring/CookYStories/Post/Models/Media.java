package com.cookystoriesspring.CookYStories.Post.Models;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

@Document(collection = "Media")
public class Media {

    @Id
    String id;

    String postId;

    // Image, Gif, Video
    String type;

    byte[] content;

    public Media() {

    }

    public Media(String type, String postId, byte[] imagesContent) {
        this.type = type;
        this.content = imagesContent;
        this.postId = postId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Media media = (Media) o;
        return id.equals(media.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Media{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
                ", postId='" + postId + '\'' +
                ", content=" + content +
                '}';
    }
}

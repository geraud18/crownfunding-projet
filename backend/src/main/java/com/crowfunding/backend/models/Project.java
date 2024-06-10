package com.crowfunding.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@Table(name = "PROJECT")
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    private Long id;

    @Column(name = "Project_leading")
    private ProjectLeading projectLeading;

    @Column(name = "Project_leading_name")
    private String projectLeadingName;

    @Column(name = "Project_type")
    private ProjectType projectType;

    @Column(name = "least_collect_amount")
    private String leastCollectAmount;

    @Column(name = "name")
    private String name;

    @Column(name = "localisation")
    private String localisation;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @Column(name = "time")
    private String time;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "project")
    Set<Funding> funding;

    @OneToMany(mappedBy = "project")
    Set<FaqModel> faq;

    public enum ProjectLeading {
        MYSELF,
        ASSOCIATION,
        FOUNDATION,
        SOCIETY,
        PUBLIC_ACTOR,
    }

    public enum ProjectType {
        JACKPOT,
        PRE_ORDER,
        SUBSCRIPTION,
        SOCIETY,
        PUBLIC_ACTOR,
    }

}

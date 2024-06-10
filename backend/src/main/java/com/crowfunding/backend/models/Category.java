package com.crowfunding.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@Table(name = "CATEGORY")
@AllArgsConstructor
@NoArgsConstructor
public class Category {

    @Id
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<Project> project;
}

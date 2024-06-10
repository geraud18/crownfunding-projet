package com.crowfunding.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "FAQ")
@AllArgsConstructor
@NoArgsConstructor
public class FaqModel {

    @Id
    private Long id;

    @Column(name = "question_name")
    private String questionName;

    @Column(name = "answer")
    private String answer;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;
}

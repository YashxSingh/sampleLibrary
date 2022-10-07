package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.sample;

public interface SampleRepository extends JpaRepository<sample, Long> {

}

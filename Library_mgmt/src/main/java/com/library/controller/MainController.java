package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.library.model.Library;
import com.library.repository.LibraryRepository;
import com.library.repository.SampleRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8090")
public class MainController {

	@Autowired
	private LibraryRepository libraryRepository;
	
	@Autowired
	private SampleRepository sampleRepository;

	@PostMapping("/post")
	public Library insertBook(@RequestBody Library library) {
		return libraryRepository.save(library);
	}

	@GetMapping("/get")
	public List<Library> showLibrary() {
		return libraryRepository.findAll();
	}
}

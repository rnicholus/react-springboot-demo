package com.raynicholus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@SpringBootApplication
@RestController
public class Example {
    @Inject
    private NameDao nameDao;

    @RequestMapping("/names")
    public List<String> getNames() {
        return nameDao.getAll();
    }

    @RequestMapping(value = "/name/{name}", method = RequestMethod.POST)
    public void addName(@PathVariable("name") String name) {
        nameDao.add(name);
    }

    public static void main(String[] args) {
        SpringApplication.run(Example.class, args);
    }
}
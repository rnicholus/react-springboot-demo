package com.raynicholus;

import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Scope(BeanDefinition.SCOPE_SINGLETON)
public class NameDao {
    private List<String> names = new ArrayList<>();

    public List<String> getAll() {
        return names;
    }

    public void add(String name) {
        names.add(name);
    }
}

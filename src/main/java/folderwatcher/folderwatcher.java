/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package folderwatcher;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import folderwatcher.config.CorsConfig;

/**
 *
 * @author mahmouderradi
 */
@SpringBootApplication
@Import(CorsConfig.class)
public class folderwatcher {
	public static void main(String[] args) {
		SpringApplication.run(folderwatcher.class, args);
	}
}
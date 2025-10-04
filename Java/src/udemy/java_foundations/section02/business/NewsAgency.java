package udemy.java_foundations.section02.business;

import udemy.java_foundations.section02.business.factory.Company;

class NewsAgency {
    Company company;

    @Override
    public String toString() {
        return "NewsAgency{" +
                "company=" + company +
                '}';
    }
}

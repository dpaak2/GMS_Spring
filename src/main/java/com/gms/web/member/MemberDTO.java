package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Lazy @Component
public class MemberDTO{

	private String id, password, ssn,name,regedate,email,major,subject,phone,profile,birthday,gender;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPass() {
		return password;
	}
	public void setPass(String password) {
		this.password = password;
	}
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegedate() {
		return regedate;
	}
	public void setRegedate(String regedate) {
		this.regedate = regedate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "MemberBean [id=" + id + ", pass=" + password + ", ssn=" + ssn + ", name=" + name + ", regedate=" + regedate
				+ ", email=" + email + ", major=" + major + ", subject=" + subject + ", phone=" + phone + ", profile="
				+ profile + ", birthday=" + birthday + ", gender=" + gender + "]";
	}
	
}

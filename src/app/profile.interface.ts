export interface Profile {
	info: Info;
	employments: Employment[];
	educations: Education[];
	projects: Project[];
	languages: string[];
	drivingLicenses: string[];

}

export interface Info {
	age: number;
	city: string;
	linkedin: string;
	name: string;
	phoneNr: string;
	postalNr: number;
	socialNr: number;
	street: string;
}

export interface Employment {
	about: string;
	start: string;
	end: string;
	name: string;
}

export interface Project {
	about: string;
	name: string;
}

export interface Education {
	name: string;
	about: string;
	start: string;
	end: string;
}

export interface DrivingLicense {
	type: string;
	country: string;
	year: string;
}


import { hash, compare, genSalt } from "bcrypt";

export const hashObject = async (objectNeeded) => {
	const salt = await genSalt(Number(10));
	const hashedObject = await hash(objectNeeded, salt);
	return hashedObject;
};

export const compareObject = async (detail, detailToCompare) => {
	const boolean = await compare(detail, detailToCompare);
	return boolean;
};
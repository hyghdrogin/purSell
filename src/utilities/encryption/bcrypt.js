import { hash, compare, genSalt } from "bcrypt";

const hashObject = async (objectNeeded) => {
	const salt = await genSalt(Number(10));
	const hashedObject = await hash(objectNeeded, salt);
	return hashedObject;
};

const compareObject = async (detail, detailToCompare) => {
	const boolean = await compare(detail, detailToCompare);
	return boolean;
};

export {
	hashObject, compareObject
};
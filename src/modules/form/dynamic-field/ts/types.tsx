import React, { ReactNode, useMemo } from 'react';
export interface IField {
	[key: string]: string;
}

export interface DynamicFieldProps {
	children: ReactNode;
	value: IField[];
	onChange?: (newFields: IField[]) => void;
}

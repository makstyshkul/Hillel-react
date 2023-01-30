import Folder from "./Folder";
import File from "./File";
import { FOLDER_TYPE } from "./Constants.js";

//

export const renderCurrentType = (data, expandedFolders = []) =>
	data.map(i => 
		(i.type === FOLDER_TYPE) && (expandedFolders.some(f => f.includes(i.name))) ? (
			<Folder key={JSON.stringify({ ...i, expandedFolders: expandedFolders })} 
				name={i.name} 
				expandedFolders={expandedFolders} 
				children={i.children}
			/>
		) : expandedFolders.some(f => f.includes(i.name)) ? ( 
			<File 
				key={JSON.stringify({ ...i, expandedFolders: expandedFolders })} 
				name={i.name} 
				mime={i.mime} 
			/>
		) : null
	);


export const treeToMap = (data, path = '') => {
	let result = {}

	data.forEach(i => {
		if (i.type === FOLDER_TYPE) {
			const r = treeToMap(i.children, `${path}/${i.name}`)
			result = { ...result, ...r }
		} else {
			result[`${path}/${i.name}`] = i.name;

		}
	});

	return result;
}
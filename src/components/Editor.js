import { useDispatch } from 'react-redux';
import actionCreator from '../reduxActions/actionCreator';

const Editor = () => {
	const dispatch = useDispatch();
	const defaultMarkupText = `# Markdown Previewer

## Coded and designed by Adelberd Mothusi Motlhabinyana
	
This is a [link](https://google.com) in Markdown
	
We can include an inline code \`<div></div>\`
	
\`\`\`
// Multi -line code in Markdown:
	for (let i = 0; i < 10; i++) {
		console.log(i);
}
\`\`\`

We can list things with list item elements

1. My name is Mothusi.
2. I live in South Africa.
3. I'm a Web developer.

> Do not forget blockquotes

You can make your web page more appealing with images and with **Bolded** and _italic_ text, so include them like this.
![Google logo](https://en.wikipedia.org/wiki/File:Google_2015_logo.svg)
`;

	const defaultText = () => {
		return dispatch(actionCreator(defaultMarkupText));
	};

	document.addEventListener('load', defaultText());

	return (
		<div className="div-editor">
			<label htmlFor="editor">Editor</label>
			<textarea
				name="editor"
				id="editor"
				cols="60"
				rows="10"
				defaultValue={defaultMarkupText}
				onChange={(e) => dispatch(actionCreator(e.target.value))}
			></textarea>
		</div>
	);
};

export default Editor;

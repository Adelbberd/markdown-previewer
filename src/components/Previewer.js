import { useSelector } from 'react-redux';
import marked from 'marked';
import DOMPurify from 'dompurify';

const Previewer = () => {
	const inputText = useSelector((state) => state);
	const sanitizedInput = DOMPurify.sanitize(marked(inputText));

	return (
		<div className="div-preview">
			<label htmlFor="preview">Markdown Previewer</label>
			<div id="preview" dangerouslySetInnerHTML={{ __html: sanitizedInput }} />
		</div>
	);
};

export default Previewer;

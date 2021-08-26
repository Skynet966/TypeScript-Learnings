import { writeFileSync } from 'fs';
import { OutputTarget } from './../Summary';
export default class HtmlReport implements OutputTarget {
	print(report: string): void {
		const html = `<div><h1>Analysis Output</h1><div>${report}</div></div>`;
		writeFileSync(__dirname + '/../../src/reports/report.html', html);
	}
}

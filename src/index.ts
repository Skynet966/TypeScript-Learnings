import MatchReader from './MatchReader';
import Summary from './Summary';

//Static way to generate Summary instance.
const matchReader = MatchReader.readFromCsv('football');
matchReader.load();

//Static way to generate Summary instance.
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);

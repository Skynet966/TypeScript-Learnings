import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import ConsoleReport from './reportTargets/ConsoleReport';
import WinsAnalysis from './analyzers/WinsAnalysis';
import Summary from './Summary';
import HtmlReport from './reportTargets/HtmlReport';

//Static way to generate Summary instance.
const matchReader = MatchReader.readFromCsv('football');
matchReader.load();

//Static way to generate Summary instance.
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);

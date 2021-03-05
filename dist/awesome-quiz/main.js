(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");













var appRoutes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] },
    { path: ':quizId', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestionFormComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/question-form/question-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-form/question-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question\" *ngIf=\"question\">\n  <mat-card-title>{{question.label}}</mat-card-title>\n  <form [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <label *ngFor=\"let choice of question.choices\">\n        <input type=\"radio\" [value]=\"choice\" formControlName=\"choice\">\n        <span>{{choice.value}}</span>\n      </label>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/question-form/question-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/question-form/question-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXJpbWJlci9TaXRlcy9hd2Vzb21lLXF1aXovc3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/question-form/question-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-form/question-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");




var QuestionFormComponent = /** @class */ (function () {
    function QuestionFormComponent() {
        var _this = this;
        this.onChoiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function () {
            _this.onChoiceMade.emit(_this.form.value.choice);
        };
    }
    QuestionFormComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.form.valueChanges.subscribe(this.onChange);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quiz_model__WEBPACK_IMPORTED_MODULE_3__["Question"])
    ], QuestionFormComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuestionFormComponent.prototype, "onChoiceMade", void 0);
    QuestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-form',
            template: __webpack_require__(/*! ./question-form.component.html */ "./src/app/question-form/question-form.component.html"),
            styles: [__webpack_require__(/*! ./question-form.component.scss */ "./src/app/question-form/question-form.component.scss")]
        })
    ], QuestionFormComponent);
    return QuestionFormComponent;
}());



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz.model.ts");





var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuizzes = function () {
        return this.http.get('./assets/quiz-list.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.map(function (r) { return new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Quiz"](r.label, r.name, r.description, r.fileName); });
        }));
    };
    QuestionsService.prototype.getQuestions = function (fileName) {
        return this.http.get("./assets/" + fileName + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.map(function (r) { return new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Question"](r.label, r.choices); });
        }));
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-spinner *ngIf=\"quiz && !questions\" class=\"spinner-grow text-primary\"></mat-progress-spinner>\n\n<mat-card class=\"quiz\" *ngIf=\"questions\">\n  <div class=\"questions\" *ngIf=\"!showResults\">\n    <app-question-form [question]=\"questions[currentQuestionIndex]\" (onChoiceMade)=\"updateChoice($event)\">\n    </app-question-form>\n\n    <button mat-stroked-button (click)=\"nextOrViewResults()\" [disabled]=\"!answers.values[currentQuestionIndex]\">\n      {{currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Next'}}\n    </button>\n  </div>\n\n  <app-results *ngIf=\"showResults\" [answers]=\"answers\"></app-results>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz {\n  max-width: 500px;\n  margin: 40px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXJpbWJlci9TaXRlcy9hd2Vzb21lLXF1aXovc3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl6IHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");





var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuestions(this.route.snapshot.params.quizId)
            .subscribe(function (questions) {
            _this.questions = questions;
            _this.answers = new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Answers"]();
            _this.currentQuestionIndex = 0;
        });
    };
    QuestionsComponent.prototype.updateChoice = function (choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    };
    QuestionsComponent.prototype.nextOrViewResults = function () {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    };
    QuestionsComponent.prototype.reset = function () {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz.model.ts":
/*!*******************************!*\
  !*** ./src/app/quiz.model.ts ***!
  \*******************************/
/*! exports provided: Choice, Question, Quiz, Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
var Choice = /** @class */ (function () {
    function Choice(value, correct) {
        this.value = value;
        this.correct = correct;
    }
    return Choice;
}());

var Question = /** @class */ (function () {
    function Question(label, choices) {
        this.label = label;
        this.choices = choices;
    }
    return Question;
}());

var Quiz = /** @class */ (function () {
    function Quiz(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
    return Quiz;
}());

var Answers = /** @class */ (function () {
    function Answers(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    return Answers;
}());



/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n  <mat-card-title>Results</mat-card-title>\n  <mat-list class=\"answers\">\n    <div *ngFor=\"let a of answers.values\" [ngClass]=\"{correct: a.correct}\">\n      <mat-list-item>{{a.value}}</mat-list-item>\n      <mat-divider></mat-divider>\n    </div>\n  </mat-list>\n  <a mat-stroked-button routerLink=\"/welcome\" color=\"accent\">Choose another quiz</a>\n</div>\n"

/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answers {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXJpbWJlci9TaXRlcy9hd2Vzb21lLXF1aXovc3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnN3ZXJzIHtcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quiz_model__WEBPACK_IMPORTED_MODULE_2__["Answers"])
    ], ResultsComponent.prototype, "answers", void 0);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
        })
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome mat-typography\">\n  <h1>Welcome to QuizLand</h1>\n  <div *ngFor=\"let q of quiz\">\n    <mat-card class=\"quiz-select\">\n      <mat-card-title>{{q.label}}</mat-card-title>\n      <mat-card-subtitle>{{q.description}}</mat-card-subtitle>\n      <mat-card-actions>\n        <a routerLink=\"/{{q.name}}\" mat-stroked-button color=\"accent\">Select this quiz</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  max-width: 500px;\n  margin: 40px auto; }\n\n.quiz-select {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXJpbWJlci9TaXRlcy9hd2Vzb21lLXF1aXovc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZSB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xufVxuXG4ucXVpei1zZWxlY3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(questionsService) {
        this.questionsService = questionsService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuizzes().subscribe(function (quiz) {
            _this.quiz = quiz;
        });
    };
    WelcomeComponent.prototype.reset = function () {
        this.quiz = undefined;
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dirimber/Sites/awesome-quiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map

"use strict";

let ButtonEvent = require('./ButtonEvent.js');
let CliffEvent = require('./CliffEvent.js');
let Led = require('./Led.js');
let MotorPower = require('./MotorPower.js');
let KeyboardInput = require('./KeyboardInput.js');
let Sound = require('./Sound.js');
let DigitalOutput = require('./DigitalOutput.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let ExternalPower = require('./ExternalPower.js');
let VersionInfo = require('./VersionInfo.js');
let ScanAngle = require('./ScanAngle.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let BumperEvent = require('./BumperEvent.js');
let SensorState = require('./SensorState.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let DockInfraRed = require('./DockInfraRed.js');
let ControllerInfo = require('./ControllerInfo.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');

module.exports = {
  ButtonEvent: ButtonEvent,
  CliffEvent: CliffEvent,
  Led: Led,
  MotorPower: MotorPower,
  KeyboardInput: KeyboardInput,
  Sound: Sound,
  DigitalOutput: DigitalOutput,
  WheelDropEvent: WheelDropEvent,
  ExternalPower: ExternalPower,
  VersionInfo: VersionInfo,
  ScanAngle: ScanAngle,
  DigitalInputEvent: DigitalInputEvent,
  BumperEvent: BumperEvent,
  SensorState: SensorState,
  PowerSystemEvent: PowerSystemEvent,
  DockInfraRed: DockInfraRed,
  ControllerInfo: ControllerInfo,
  RobotStateEvent: RobotStateEvent,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingResult: AutoDockingResult,
  AutoDockingGoal: AutoDockingGoal,
  AutoDockingAction: AutoDockingAction,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionResult: AutoDockingActionResult,
};

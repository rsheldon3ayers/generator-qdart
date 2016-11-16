import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';
import 'package:quavertools/quavertools.dart';
import 'package:projectname/project_name.dart';

void main()
{
  SetupUtil.preInit();

  StageOptions options = new StageOptions()
    ..stageAlign = StageAlign.TOP
    ..stageScaleMode = StageScaleMode.SHOW_ALL
    ..inputEventMode = InputEventMode.MouseAndTouch
    ..renderEngine = RenderEngine.WebGL
    ..transparent = true
    ..backgroundColor = Color.Transparent;

  Stage stage = new Stage(html.querySelector("#stage"), width: 2048, height: 1536, options:options);

  RenderLoop renderLoop = new RenderLoop()
    ..addStage(stage);

  ProjectName appEntry = new ProjectName()
  ..addTo(stage);
}
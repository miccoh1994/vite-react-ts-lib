import { test, expect } from "vitest";
import renderer from 'react-test-renderer'
import {MyEpicLibraryComponent} from '@mynamespace/myepiclib';
function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('MyEpicLibraryComponent renders succesfully', () => {
  const component = renderer.create(
    <MyEpicLibraryComponent/>,
  )
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
import { VitePluginEnv } from '../index'; // 假设这是 ESM 的测试

// 测试配置处理
describe('VitePluginEnv Configuration', () => {
  // 测试没有提供配置时的默认行为
  it('should handle no configuration', () => {
    const plugin = VitePluginEnv(undefined);
    expect(plugin.config).toBeInstanceOf(Function)
    const define = (plugin.config as Function)()?.define
    expect(define).toBeInstanceOf(Object);
  });

  // 测试数组配置
  it('should handle array of environment variables', () => {
    const envs = ['TEST_VAR'];
    process.env.TEST_VAR = 'test'; // 设置环境变量
    const plugin = VitePluginEnv(envs);
    expect(plugin.config).toBeInstanceOf(Function)
    const define = (plugin.config as Function)()?.define
    expect(define["import.meta.env.TEST_VAR"]).toBe('"test"')
  });

  // 测试对象映射配置
  it('should handle object map of environment variables', () => {
    const envs = { 'CUSTOM_VAR': 'custom' };
    const plugin = VitePluginEnv(envs);
    expect(plugin.config).toBeInstanceOf(Function)
    const define = (plugin.config as Function)()?.define
    expect(define["import.meta.env.CUSTOM_VAR"]).toBe('"custom"')
  });

  // 清理环境变量
  afterEach(() => {
    delete process.env.TEST_VAR;
  });
});
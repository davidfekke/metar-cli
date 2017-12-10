# METAR CLI

This is a command line tool that can be used for getting current metar data from the terminal.

```shell
$ npm install -g metar-cli
```

From the command prompt you can get up to date pilot weather reports.

```shell
$ metar KCRG
KCRG 092353Z 29011KT 10SM CLR 07/02 A3008 RMK AO2 SLP186 T00720017 10106 20072 53034
```

The command line tool also provides help.

```
> metar --help
  Usage: metar [options] [icao]


  Options:

    -V, --version  output the version number
    -d, --detail   Detailed METAR
    -h, --help     output usage information
```

The `--detail` option will give you the full metar in JSON form.

Copyright David Fekke 2017

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     <http://www.apache.org/licenses/LICENSE-2.0>

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
